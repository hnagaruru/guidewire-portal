package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRuleElement.eti;APDRuleElement.eix;APDRuleElement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRuleElementInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the RuleConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRuleConditions(entity.APDRuleCondition element);
  
  
  /**
   * Gets the value of the DefaultCodeValue field.
   * The dropdown list entry if this field is a dropdown
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getDefaultCodeValue();
  
  
  public gw.pl.persistence.core.Key getDefaultCodeValueID();
  
  
  /**
   * Gets the value of the DefaultDateValue field.
   * The value if a date/time
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDefaultDateValue();
  
  
  /**
   * Gets the value of the DefaultDecimalValue field.
   * The value if a number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultDecimalValue();
  
  
  /**
   * Gets the value of the DefaultIntegerValue field.
   * The value if an integer
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefaultIntegerValue();
  
  
  /**
   * Gets the value of the DefaultStringValue field.
   * The value if text or a dropdown entry
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultStringValue();
  
  
  /**
   * Gets the value of the DefaultTagValue field.
   * The value if a tag
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDTagApplicability getDefaultTagValue();
  
  
  /**
   * Gets the value of the Existence field.
   * The result for an existence rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getExistence();
  
  
  /**
   * Gets the value of the Rule field.
   * The rule to which this element belongs
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRule getRule();
  
  
  /**
   * Gets the value of the RuleConditions field.
   * The conditions that must match for this rule to fire
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRuleCondition[] getRuleConditions();
  
  
  public gw.pl.persistence.core.Key getRuleID();
  
  
  /**
   * Gets the value of the Sequence field.
   * The order in which the fields are displayed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleElement getSubtype();
  
  
  /**
   * Gets the value of the DefaultBitValue field.
   * The value if a true/false
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBitValue();
  
  
  /**
   * Removes the given element from the RuleConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromRuleConditions(entity.APDRuleCondition element);
  
  
  /**
   * Removes the given element from the RuleConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRuleConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the DefaultBitValue field.
   */
  public void setDefaultBitValue(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DefaultCodeValue field.
   */
  public void setDefaultCodeValue(entity.APDDropdownEntry value);
  
  
  public void setDefaultCodeValueID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the DefaultTagValue field.
   */
  public void setDefaultTagValue(typekey.APDTagApplicability value);
  
  
  /**
   * Sets the value of the Existence field.
   */
  public void setExistence(typekey.APDDataExistenceType value);
  
  
  /**
   * Sets the value of the Rule field.
   */
  public void setRule(entity.APDRule value);
  
  
  /**
   * Sets the value of the RuleConditions field.
   */
  public void setRuleConditions(entity.APDRuleCondition[] value);
  
  
  public void setRuleID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRuleElement value);
  
  
  
}