package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCondition.eti;APDRiskCondition.eix;APDRiskCondition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskConditionInternal extends com.guidewire._generated.entity.APDRiskClauseInternal {
  /**
   * Gets the value of the Condition field.
   * The condition pattern defining this condition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDCondition getCondition();
  
  
  public gw.pl.persistence.core.Key getConditionID();
  
  
  /**
   * Sets the value of the Condition field.
   */
  public void setCondition(entity.APDCondition value);
  
  
  public void setConditionID(gw.pl.persistence.core.Key value);
  
  
  
}