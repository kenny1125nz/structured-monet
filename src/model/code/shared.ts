// Shared constants for code node type metadata schemas

export const LANGUAGES = ["java", "csharp", "typescript", "python"] as const;
export const VISIBILITIES = ["public", "protected", "private", "internal"] as const;

export const languageProperty = {
    type: "string",
    enum: LANGUAGES,
    description: "Implementation language of this element.",
};

export const visibilityProperty = {
    type: "string",
    enum: VISIBILITIES,
    description: "Access modifier.",
};