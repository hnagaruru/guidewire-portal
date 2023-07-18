package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CrossTermLink.eti;CrossTermLink.eix;CrossTermLink.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CrossTermLinkInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Gets the value of the LinkType field.
   * Type of the from and to entities
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLinkType();
  
  
  /**
   * Gets the value of the Owner field.
   * Public ID of the owner of the cross term link
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOwner();
  
  
  /**
   * Gets the value of the OwningBranch field.
   * Branch of the link owner
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getOwningBranch();
  
  
  public gw.pl.persistence.core.Key getOwningBranchID();
  
  
  /**
   * Gets the value of the Target field.
   * Public ID of the target of the cross term link
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTarget();
  
  
  /**
   * Sets the value of the LinkType field.
   */
  public void setLinkType(java.lang.String value);
  
  
  /**
   * Sets the value of the Owner field.
   */
  public void setOwner(java.lang.String value);
  
  
  /**
   * Sets the value of the OwningBranch field.
   */
  public void setOwningBranch(entity.PolicyPeriod value);
  
  
  public void setOwningBranchID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Target field.
   */
  public void setTarget(java.lang.String value);
  
  
  
}