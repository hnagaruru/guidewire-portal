package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InstalledRuleElement.eti;InstalledRuleElement.eix;InstalledRuleElement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InstalledRuleElementInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Condition field.
   * Gosu expression to evaluate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCondition();
  
  
  /**
   * Gets the value of the ConditionTargets field.
   * Comma delimited string of targets for condition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConditionTargets();
  
  
  /**
   * Gets the value of the DefaultDateValue field.
   * The default for a date value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDefaultDateValue();
  
  
  /**
   * Gets the value of the DefaultDecimalValue field.
   * The default for a decimal value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultDecimalValue();
  
  
  /**
   * Gets the value of the DefaultIntegerValue field.
   * The default for an integer value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefaultIntegerValue();
  
  
  /**
   * Gets the value of the DefaultStringValue field.
   * The default for a string value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultStringValue();
  
  
  /**
   * Gets the value of the DefaultTypekeyValue field.
   * The code for a default typekey value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultTypekeyValue();
  
  
  /**
   * Gets the value of the Existence field.
   * Existence type if this rule element condition is true. This column is only valid for existence rules.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getExistence();
  
  
  /**
   * Gets the value of the InstalledRule field.
   * The rule that this element belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledRule getInstalledRule();
  
  
  public gw.pl.persistence.core.Key getInstalledRuleID();
  
  
  /**
   * Gets the value of the Issue field.
   * The description of the validation issue for this element
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssue();
  
  
  /**
   * Gets the value of the Sequence field.
   * Order in which this element should be evaluated, relative to other elements in the rule.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledRuleElement getSubtype();
  
  
  /**
   * Gets the value of the DefaultBooleanValue field.
   * The default for a boolean value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBooleanValue();
  
  
  /**
   * Gets the value of the Valid field.
   * Whether or not this element is valid and can be evaluated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValid();
  
  
  /**
   * Sets the value of the Condition field.
   */
  public void setCondition(java.lang.String value);
  
  
  /**
   * Sets the value of the ConditionTargets field.
   */
  public void setConditionTargets(java.lang.String value);
  
  
  /**
   * Sets the value of the DefaultBooleanValue field.
   */
  public void setDefaultBooleanValue(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DefaultDateValue field.
   */
  public void setDefaultDateValue(java.util.Date value);
  
  
  /**
   * Sets the value of the DefaultDecimalValue field.
   */
  public void setDefaultDecimalValue(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the DefaultIntegerValue field.
   */
  public void setDefaultIntegerValue(java.lang.Integer value);
  
  
  /**
   * Sets the value of the DefaultStringValue field.
   */
  public void setDefaultStringValue(java.lang.String value);
  
  
  /**
   * Sets the value of the DefaultTypekeyValue field.
   */
  public void setDefaultTypekeyValue(java.lang.String value);
  
  
  /**
   * Sets the value of the Existence field.
   */
  public void setExistence(typekey.APDDataExistenceType value);
  
  
  /**
   * Sets the value of the InstalledRule field.
   */
  public void setInstalledRule(entity.InstalledRule value);
  
  
  public void setInstalledRuleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Issue field.
   */
  public void setIssue(java.lang.String value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.InstalledRuleElement value);
  
  
  /**
   * Sets the value of the Valid field.
   */
  public void setValid(java.lang.Boolean value);
  
  
  
}