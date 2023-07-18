package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDProductLineEdition.eti;APDProductLineEdition.eix;APDProductLineEdition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDProductLineEditionInternal extends com.guidewire._generated.entity.APDEditionInternal {
  /**
   * Gets the value of the ProductLine field.
   * The product line for which this is an edition (version)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductLine getProductLine();
  
  
  public gw.pl.persistence.core.Key getProductLineID();
  
  
  /**
   * Sets the value of the ProductLine field.
   */
  public void setProductLine(entity.APDProductLine value);
  
  
  public void setProductLineID(gw.pl.persistence.core.Key value);
  
  
  
}