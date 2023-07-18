package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InstalledRule.eti;InstalledRule.eix;InstalledRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface InstalledRuleInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the Elements array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToElements(entity.InstalledRuleElement element);
  
  
  /**
   * Gets the value of the CodeIdentifier field.
   * The identifier of the element (e.g., coverage, term, option, field, typekey) owning the rule.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCodeIdentifier();
  
  
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
   * Gets the value of the DefaultExistence field.
   * Default existence if none of the rule elements match. Only valid for existence rules.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getDefaultExistence();
  
  
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
   * Gets the value of the DefaultTypelist field.
   * The typelist name for a default typekey value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultTypelist();
  
  
  /**
   * Gets the value of the DefaultValueScript field.
   * Gosu expression to evaluate calculated default value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultValueScript();
  
  
  /**
   * Gets the value of the Elements field.
   * Rule elements that are evaluated in order by sequence. This array may be empty.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledRuleElement[] getElements();
  
  
  /**
   * Gets the value of the InstalledEdition field.
   * The edition that this rule belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledEdition getInstalledEdition();
  
  
  public gw.pl.persistence.core.Key getInstalledEditionID();
  
  
  /**
   * Gets the value of the OwnerType field.
   * The type of entity or property that owns this rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledRuleOwnerType getOwnerType();
  
  
  /**
   * Gets the value of the RootEntity field.
   * Fully-qualified type of the entity this rule applies to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRootEntity();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledRule getSubtype();
  
  
  /**
   * Gets the value of the Type field.
   * Type of ruleset (e.g., existence, default, min, max)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleType getType();
  
  
  /**
   * Gets the value of the ValueType field.
   * The type of value returned by this default rule
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledRuleValueType getValueType();
  
  
  /**
   * Gets the value of the DefaultBooleanValue field.
   * The default for a boolean value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBooleanValue();
  
  
  /**
   * Removes the given element from the Elements array. This is achieved by marking the element for removal.
   */
  public void removeFromElements(entity.InstalledRuleElement element);
  
  
  /**
   * Removes the given element from the Elements array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromElements(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the CodeIdentifier field.
   */
  public void setCodeIdentifier(java.lang.String value);
  
  
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
   * Sets the value of the DefaultTypekeyValue field.
   */
  public void setDefaultTypekeyValue(java.lang.String value);
  
  
  /**
   * Sets the value of the DefaultTypelist field.
   */
  public void setDefaultTypelist(java.lang.String value);
  
  
  /**
   * Sets the value of the DefaultValueScript field.
   */
  public void setDefaultValueScript(java.lang.String value);
  
  
  /**
   * Sets the value of the Elements field.
   */
  public void setElements(entity.InstalledRuleElement[] value);
  
  
  /**
   * Sets the value of the InstalledEdition field.
   */
  public void setInstalledEdition(entity.InstalledEdition value);
  
  
  public void setInstalledEditionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OwnerType field.
   */
  public void setOwnerType(typekey.InstalledRuleOwnerType value);
  
  
  /**
   * Sets the value of the RootEntity field.
   */
  public void setRootEntity(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.InstalledRule value);
  
  
  /**
   * Sets the value of the Type field.
   */
  public void setType(typekey.APDRuleType value);
  
  
  /**
   * Sets the value of the ValueType field.
   */
  public void setValueType(typekey.InstalledRuleValueType value);
  
  
  
}