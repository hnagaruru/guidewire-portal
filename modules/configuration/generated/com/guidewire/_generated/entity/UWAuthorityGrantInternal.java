package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "UWAuthorityGrant.eti;UWAuthorityGrant.eix;UWAuthorityGrant.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface UWAuthorityGrantInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.community.UWAuthorityGrantPublicMethods {
  /**
   * Gets the value of the IssueType field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWIssueType getIssueType();
  
  
  public gw.pl.persistence.core.Key getIssueTypeID();
  
  
  /**
   * Gets the value of the UWAuthorityProfile field.
   * The authority profile this grant belongs to.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.UWAuthorityProfile getUWAuthorityProfile();
  
  
  public gw.pl.persistence.core.Key getUWAuthorityProfileID();
  
  
  /**
   * Gets the value of the Value field.
   * The value to compare against when determining if this grant allows approval of an issue.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValue();
  
  
  /**
   * Gets the value of the ApproveAnyValue field.
   * If true, grants authority to approve any value.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isApproveAnyValue();
  
  
  /**
   * Sets the value of the ApproveAnyValue field.
   */
  public void setApproveAnyValue(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IssueType field.
   */
  public void setIssueType(entity.UWIssueType value);
  
  
  public void setIssueTypeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UWAuthorityProfile field.
   */
  public void setUWAuthorityProfile(entity.UWAuthorityProfile value);
  
  
  public void setUWAuthorityProfileID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Value field.
   */
  public void setValue(java.lang.String value);
  
  
  
}