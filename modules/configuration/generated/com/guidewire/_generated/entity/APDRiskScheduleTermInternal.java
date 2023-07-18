package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskScheduleTerm.eti;APDRiskScheduleTerm.eix;APDRiskScheduleTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskScheduleTermInternal extends com.guidewire._generated.entity.APDRiskTermInternal {
  /**
   * Gets the value of the RiskItem field.
   * The schedule item that this is part of
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskScheduleItem getRiskItem();
  
  
  public gw.pl.persistence.core.Key getRiskItemID();
  
  
  /**
   * Sets the value of the RiskItem field.
   */
  public void setRiskItem(entity.APDRiskScheduleItem value);
  
  
  public void setRiskItemID(gw.pl.persistence.core.Key value);
  
  
  
}