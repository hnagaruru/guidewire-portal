package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDProductToLine.eti;APDProductToLine.eix;APDProductToLine.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDProductToLineInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Product field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProduct getProduct();
  
  
  public gw.pl.persistence.core.Key getProductID();
  
  
  /**
   * Gets the value of the ProductLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDProductLine getProductLine();
  
  
  public gw.pl.persistence.core.Key getProductLineID();
  
  
  /**
   * Sets the value of the Product field.
   */
  public void setProduct(entity.APDProduct value);
  
  
  public void setProductID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProductLine field.
   */
  public void setProductLine(entity.APDProductLine value);
  
  
  public void setProductLineID(gw.pl.persistence.core.Key value);
  
  
  
}