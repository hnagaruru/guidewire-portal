package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TaxLocation.eti;TaxLocation.eix;TaxLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface TaxLocationInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal {
  /**
   * Gets the value of the City field.
   * The city for the tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCity();
  
  
  /**
   * Gets the value of the Code field.
   * The code for the tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCode();
  
  
  /**
   * Gets the value of the County field.
   * The county for the tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCounty();
  
  
  /**
   * Gets the value of the Description field.
   * The description of this tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the State field.
   * The state for this tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the TLPrefix field.
   * The TaxLocation prefix for this tax location
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTLPrefix();
  
  
  /**
   * Sets the value of the City field.
   */
  public void setCity(java.lang.String value);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(java.lang.String value);
  
  
  /**
   * Sets the value of the County field.
   */
  public void setCounty(java.lang.String value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the TLPrefix field.
   */
  public void setTLPrefix(java.lang.String value);
  
  
  
}