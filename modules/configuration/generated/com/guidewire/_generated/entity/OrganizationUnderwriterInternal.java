package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "OrganizationUnderwriter.eti;OrganizationUnderwriter.eix;OrganizationUnderwriter.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface OrganizationUnderwriterInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the Organization field.
   * Organization.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Organization getOrganization();
  
  
  public gw.pl.persistence.core.Key getOrganizationID();
  
  
  /**
   * Gets the value of the Underwriter field.
   * @deprecated Underwriter.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUnderwriter();
  
  
  public gw.pl.persistence.core.Key getUnderwriterID();
  
  
  /**
   * Sets the value of the Organization field.
   */
  public void setOrganization(entity.Organization value);
  
  
  public void setOrganizationID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Underwriter field.
   * @deprecated Underwriter.
   */
  @java.lang.Deprecated
  public void setUnderwriter(entity.User value);
  
  
  public void setUnderwriterID(gw.pl.persistence.core.Key value);
  
  
  
}