class Test {
    static testCount = 0;

    static assertTrue(result, description) {
        Test.printResult(result === true, description);
    }

    static assertFalse(result, description) {
        Test.printResult(result === false, description);
    }

    static assertEquals(result, expected, description) {
        let passed = false;
        try {
            if (result === null && expected === null) {
                passed = true;
            } else if (result !== null && typeof result.egale === "function") {
                passed = result.egale(expected);
            } else {
                passed = JSON.stringify(result) === JSON.stringify(expected);
            }
        } catch (e) {
            passed = result === expected;
        }

        if (!passed) {
            description += ` (result is ${Test.toString(result)} but ${Test.toString(expected)} is expected)`;
        }

        Test.printResult(passed, description);
    }

    static assertNotEquals(result, expected, description) {
        let passed = true;
        try {
            if (result === null && expected === null) {
                passed = false;
            } else if (result !== null && typeof result.egale === "function") {
                passed = !result.egale(expected);
            } else {
                passed = JSON.stringify(result) !== JSON.stringify(expected);
            }
        } catch (e) {
            passed = result !== expected;
        }

        if (!passed) {
            description += ` (result is ${Test.toString(result)} but ${Test.toString(expected)} is expected)`;
        }

        Test.printResult(passed, description);
    }

    static assertError(fn, description) {
        try {
            fn();
            Test.printResult(false, description);
        } catch (e) {
            Test.printResult(true, description);
        }
    }

    static assertNoError(fn, description) {
        try {
            fn();
            Test.printResult(true, description);
        } catch (e) {
            Test.printResult(false, description);
            console.error(e);
        }
    }

    static toString(obj) {
        if (obj === null) return "null";
        try {
            if (typeof obj.versChaine === "function") {
                return obj.versChaine();
            }
        } catch (e) {}
        try {
            return obj.toString();
        } catch (e) {
            return String(obj);
        }
    }

    static printResult(passed, message) {
        const symbol = passed ? "✅" : "❌";
        const stream = passed ? console.log : console.error;
        stream(`${symbol} ${message}`);
        Test.testCount++;
    }
}
