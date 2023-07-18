package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsReceivable.eti;IMAccountsReceivable.eix;IMAccountsReceivable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMAccountsReceivableInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.copier.EffDatedCopyable, gw.api.domain.CoverableAdapter, gw.api.logicalmatch.EffDatedLogicalMatcher {
  /**
   * Adds the given element to the Coverages array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToCoverages(entity.IMAccountsRecCov element);
  
  
  /**
   * Gets the value of the AccountsRecNumber field.
   * Accounts Receivable number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAccountsRecNumber();
  
  
  /**
   * Gets the value of the BasedOnValue field.
   * Link to the row on which this row is based; or null if new to branch
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsReceivable getBasedOnValue();
  
  
  public gw.pl.persistence.core.Key getBasedOnValueID();
  
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue();
  
  
  public gw.pl.persistence.core.Key getBranchValueID();
  
  
  /**
   * Gets the value of the Coverages field.
   * All coverages that apply directly to this accounts receivable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecCov[] getCoverages();
  
  
  /**
   * Gets the value of the Description field.
   * Description of Accounts Receivable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Fixed field.
   * Unique ID for this 'object' across all branches and periods
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsReceivable getFixed();
  
  
  public gw.pl.persistence.core.Key getFixedID();
  
  
  /**
   * Gets the value of the IMAccountsRecPart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPart getIMAccountsRecPart();
  
  
  public gw.pl.persistence.core.Key getIMAccountsRecPartID();
  
  
  /**
   * Gets the value of the IMBuilding field.
   * link to the building
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMBuilding getIMBuilding();
  
  
  public gw.pl.persistence.core.Key getIMBuildingID();
  
  
  /**
   * Gets the value of the PercentDuplicated field.
   * Percent Duplicated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PercentDuplicated getPercentDuplicated();
  
  
  /**
   * Gets the value of the ReceptacleType field.
   * Receptacle Type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ReceptacleType getReceptacleType();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.IMAccountsReceivable getSubtype();
  
  
  /**
   * Gets the value of the ForwardToHomeOffice field.
   * forward to home office
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isForwardToHomeOffice();
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   */
  public void removeFromCoverages(entity.IMAccountsRecCov element);
  
  
  /**
   * Removes the given element from the Coverages array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromCoverages(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AccountsRecNumber field.
   */
  public void setAccountsRecNumber(java.lang.Integer value);
  
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  public void setBasedOnValue(entity.IMAccountsReceivable value);
  
  
  public void setBasedOnValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BranchValue field.
   */
  public void setBranchValue(entity.PolicyPeriod value);
  
  
  public void setBranchValueID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Coverages field.
   */
  public void setCoverages(entity.IMAccountsRecCov[] value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Fixed field.
   */
  public void setFixed(entity.IMAccountsReceivable value);
  
  
  public void setFixedID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ForwardToHomeOffice field.
   */
  public void setForwardToHomeOffice(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the IMAccountsRecPart field.
   */
  public void setIMAccountsRecPart(entity.IMAccountsRecPart value);
  
  
  public void setIMAccountsRecPartID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the IMBuilding field.
   */
  public void setIMBuilding(entity.IMBuilding value);
  
  
  public void setIMBuildingID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PercentDuplicated field.
   */
  public void setPercentDuplicated(typekey.PercentDuplicated value);
  
  
  /**
   * Sets the value of the ReceptacleType field.
   */
  public void setReceptacleType(typekey.ReceptacleType value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.IMAccountsReceivable value);
  
  
  
}