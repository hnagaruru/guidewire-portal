package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSignPartCost.eti;IMSignPartCost.eix;IMSignPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMSignPartCostInternal extends com.guidewire._generated.entity.IMTaxableCostInternal {
  /**
   * Gets the value of the IMSignPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMSignPart getIMSignPart();
  
  
  public gw.pl.persistence.core.Key getIMSignPartID();
  
  
  /**
   * Sets the value of the IMSignPart field.
   */
  public void setIMSignPart(entity.IMSignPart value);
  
  
  public void setIMSignPartID(gw.pl.persistence.core.Key value);
  
  
  
}