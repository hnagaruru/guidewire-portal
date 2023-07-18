package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ClaimSet.eti;ClaimSet.eix;ClaimSet.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ClaimSetInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire.pc.domain.losshistory.ClaimSetPublicMethods {
  /**
   * Adds the given element to the Claims array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToClaims(entity.Claim element);
  
  
  /**
   * Gets the value of the BeginDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getBeginDate();
  
  
  /**
   * Gets the value of the Claims field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Claim[] getClaims();
  
  
  /**
   * Gets the value of the EndDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEndDate();
  
  
  /**
   * Removes the given element from the Claims array. This is achieved by marking the element for removal.
   */
  public void removeFromClaims(entity.Claim element);
  
  
  /**
   * Removes the given element from the Claims array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromClaims(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the BeginDate field.
   */
  public void setBeginDate(java.util.Date value);
  
  
  /**
   * Sets the value of the Claims field.
   */
  public void setClaims(entity.Claim[] value);
  
  
  /**
   * Sets the value of the EndDate field.
   */
  public void setEndDate(java.util.Date value);
  
  
  
}