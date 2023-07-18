package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICoverageGroup.eti;RICoverageGroup.eix;RICoverageGroup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICoverageGroupInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the GroupType field.
   * The RI coverage group type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICoverageGroupType getGroupType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RICoverageGroup getSubtype();
  
  
  /**
   * Sets the value of the GroupType field.
   */
  public void setGroupType(typekey.RICoverageGroupType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RICoverageGroup value);
  
  
  
}