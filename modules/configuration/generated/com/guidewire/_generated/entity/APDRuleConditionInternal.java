package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRuleCondition.eti;APDRuleCondition.eix;APDRuleCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRuleConditionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Attribute field.
   * The attribute that is to be compared. Either Attribute or Clause must have a value, but not both.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDAttribute getAttribute();
  
  
  public gw.pl.persistence.core.Key getAttributeID();
  
  
  /**
   * Gets the value of the Clause field.
   * The clause that is to be compared. Either Attribute or Clause must have a value, but not both.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getClause();
  
  
  public gw.pl.persistence.core.Key getClauseID();
  
  
  /**
   * Gets the value of the CodeValue field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDDropdownEntry getCodeValue();
  
  
  public gw.pl.persistence.core.Key getCodeValueID();
  
  
  /**
   * Gets the value of the ConditionValue field.
   * The value that will be used to evaluate this condition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConditionValue();
  
  
  /**
   * Gets the value of the Operator field.
   * The type of comparison to perform between the attribute and the value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleConditionOperator getOperator();
  
  
  /**
   * Gets the value of the RuleElement field.
   * The rule element for with this a data match component
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRuleElement getRuleElement();
  
  
  public gw.pl.persistence.core.Key getRuleElementID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDRuleCondition getSubtype();
  
  
  /**
   * Sets the value of the Attribute field.
   */
  public void setAttribute(entity.APDAttribute value);
  
  
  public void setAttributeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Clause field.
   */
  public void setClause(entity.APDClause value);
  
  
  public void setClauseID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CodeValue field.
   */
  public void setCodeValue(entity.APDDropdownEntry value);
  
  
  public void setCodeValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ConditionValue field.
   */
  public void setConditionValue(java.lang.String value);
  
  
  /**
   * Sets the value of the Operator field.
   */
  public void setOperator(typekey.APDRuleConditionOperator value);
  
  
  /**
   * Sets the value of the RuleElement field.
   */
  public void setRuleElement(entity.APDRuleElement value);
  
  
  public void setRuleElementID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.APDRuleCondition value);
  
  
  
}