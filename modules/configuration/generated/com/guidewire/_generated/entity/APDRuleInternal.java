package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRule.eti;APDRule.eix;APDRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRuleInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the RuleElements array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRuleElements(entity.APDRuleElement element);
  
  
  /**
   * Gets the value of the DefaultCalculatedValue field.
   * A calculated value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDFunctionOperand getDefaultCalculatedValue();
  
  
  public gw.pl.persistence.core.Key getDefaultCalculatedValueID();
  
  
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
   * Gets the value of the DefaultExistence field.
   * The default for an existence rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getDefaultExistence();
  
  
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
   * Gets the value of the Edition field.
   * The edition that this version of the rule applies to (if there is no edition, it is a base rule)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDEdition getEdition();
  
  
  public gw.pl.persistence.core.Key getEditionID();
  
  
  /**
   * Gets the value of the RuleElements field.
   * The full list of rule elements belonging to this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRuleElement[] getRuleElements();
  
  
  /**
   * Gets the value of the RuleType field.
   * The type of rule being implemented
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleType getRuleType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRule getSubtype();
  
  
  /**
   * Gets the value of the TagType field.
   * The type of tag for a tag rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDTagType getTagType();
  
  
  /**
   * Gets the value of the DefaultBitValue field.
   * The value if a true/false
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBitValue();
  
  
  /**
   * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
   */
  public void removeFromRuleElements(entity.APDRuleElement element);
  
  
  /**
   * Removes the given element from the RuleElements array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRuleElements(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the DefaultBitValue field.
   */
  public void setDefaultBitValue(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the DefaultCalculatedValue field.
   */
  public void setDefaultCalculatedValue(entity.APDFunctionOperand value);
  
  
  public void setDefaultCalculatedValueID(gw.pl.persistence.core.Key value);
  
  
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
   * Sets the value of the DefaultExistence field.
   */
  public void setDefaultExistence(typekey.APDDataExistenceType value);
  
  
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
   * Sets the value of the Edition field.
   */
  public void setEdition(entity.APDEdition value);
  
  
  public void setEditionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RuleElements field.
   */
  public void setRuleElements(entity.APDRuleElement[] value);
  
  
  /**
   * Sets the value of the RuleType field.
   */
  public void setRuleType(typekey.APDRuleType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRule value);
  
  
  /**
   * Sets the value of the TagType field.
   */
  public void setTagType(typekey.APDTagType value);
  
  
  
}