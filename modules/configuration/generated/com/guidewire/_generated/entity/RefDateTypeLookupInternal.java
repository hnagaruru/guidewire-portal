package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RefDateTypeLookup.eti;RefDateTypeLookup.eix;RefDateTypeLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RefDateTypeLookupInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.AvailabilityLookupInternal, com.guidewire._generated.entity.StateDrivenLookupInternal, com.guidewire._generated.entity.UWCompanyFilteredLookupInternal, com.guidewire.pc.domain.productmodel.RefDateTypeLookupPublicMethods, com.guidewire.pc.domain.productmodel.impl.LookupInternalMethods {
  /**
   * Gets the value of the PolicyLinePatternCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the ProductCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode();
  
  
  /**
   * Gets the value of the ReferenceDateType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReferenceDateType getReferenceDateType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RefDateTypeLookup getSubtype();
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value);
  
  
  /**
   * Sets the value of the ReferenceDateType field.
   */
  public void setReferenceDateType(typekey.ReferenceDateType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.RefDateTypeLookup value);
  
  
  
}