package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IntegrationConfiguration.eti;IntegrationConfiguration.eix;IntegrationConfiguration.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IntegrationConfigurationInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.IntegrationConfiguration getSubtype();
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.IntegrationConfiguration value);
  
  
  
}