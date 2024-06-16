export class Explain {
	/** Unique identifier for this search result item. */
	public TotalBoost: number;

	/** Calculated relevancy score. */
	public Rules: Rules[];
	public VisibilityRules: VisibilityRules[];
	public constructor(init: Explain) {
		Object.assign(this, init);
	}
}

export class Rules {
	public Name: string;
	public RuleId: number;
	public Boost: number;
	public Priority: number;
	public IsTrigger: boolean;

	public constructor(init: Rules) {
		Object.assign(this, init);
	}
}

export class VisibilityRules {
	public Name: string;
	public RuleId: number;
	public Priority: number;
	public IsTrigger: boolean;

	public constructor(init: VisibilityRules) {
		Object.assign(this, init);
	}
}