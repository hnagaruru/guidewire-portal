package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWCompany.eti;UWCompany.eix;UWCompany.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWCompanyInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.policy.UWCompanyPublicMethods {
  /**
   * Adds the given element to the LicensedStates array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLicensedStates(entity.LicensedState element);
  
  
  /**
   * Gets the value of the Code field.
   * Code of the underwriting company
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyCode getCode();
  
  
  /**
   * Gets the value of the LicensedStates field.
   * The states in which this company is licensed to underwrite policies in.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LicensedState[] getLicensedStates();
  
  
  /**
   * Gets the value of the NAICCode field.
   * In the US, the regulatory ID is the NAIC code: 4-digit group code followed by 5-digit code assigned by the National Association of Insurance Commisioners (NAIC).  Other countries may have similar identifying codes issued by their regulatory bodies.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNAICCode();
  
  
  /**
   * Gets the value of the Name field.
   * Underwriting company name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the ParentName field.
   * Parent company name.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getParentName();
  
  
  /**
   * Gets the value of the State field.
   * For US underwriters, the state in which the company has its permanent legal residence.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Gets the value of the Status field.
   * The status of the company.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.UWCompanyStatus getStatus();
  
  
  /**
   * Removes the given element from the LicensedStates array. This is achieved by marking the element for removal.
   */
  public void removeFromLicensedStates(entity.LicensedState element);
  
  
  /**
   * Removes the given element from the LicensedStates array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLicensedStates(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Code field.
   */
  public void setCode(typekey.UWCompanyCode value);
  
  
  /**
   * Sets the value of the LicensedStates field.
   */
  public void setLicensedStates(entity.LicensedState[] value);
  
  
  /**
   * Sets the value of the NAICCode field.
   */
  public void setNAICCode(java.lang.String value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the ParentName field.
   */
  public void setParentName(java.lang.String value);
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.UWCompanyStatus value);
  
  
  
}