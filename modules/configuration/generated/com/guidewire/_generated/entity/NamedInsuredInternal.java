package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "NamedInsured.eti;NamedInsured.eix;NamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface NamedInsuredInternal extends com.guidewire._generated.entity.AccountContactRoleInternal, com.guidewire._generated.entity.ExtractableInternal, gw.api.domain.account.AccountContactRoleMethods {
  /**
   * Gets the value of the BusOpsDescription field.
   * Business operation description.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBusOpsDescription();
  
  
  /**
   * Gets the value of the IndustryCode field.
   * Industry code of named insured.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IndustryCode getIndustryCode();
  
  
  public gw.pl.persistence.core.Key getIndustryCodeID();
  
  
  /**
   * Gets the value of the OrgType field.
   * Organization type.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOrgType();
  
  
  /**
   * Sets the value of the BusOpsDescription field.
   */
  public void setBusOpsDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the IndustryCode field.
   */
  public void setIndustryCode(entity.IndustryCode value);
  
  
  public void setIndustryCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the OrgType field.
   */
  public void setOrgType(java.lang.String value);
  
  
  
}