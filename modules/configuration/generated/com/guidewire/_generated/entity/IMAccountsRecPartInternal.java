package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPart.eti;IMAccountsRecPart.eix;IMAccountsRecPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface IMAccountsRecPartInternal extends com.guidewire._generated.entity.IMCoveragePartInternal, com.guidewire._generated.entity.CoverableInternal, gw.api.domain.CoverableAdapter {
  /**
   * Adds the given element to the IMAccountsRecPartConditions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMAccountsRecPartConditions(entity.IMAccountsRecPartCond element);
  
  
  /**
   * Adds the given element to the IMAccountsRecPartCosts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMAccountsRecPartCosts(entity.IMAccountsRecPartCost element);
  
  
  /**
   * Adds the given element to the IMAccountsRecPartCovs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMAccountsRecPartCovs(entity.IMAccountsRecPartCov element);
  
  
  /**
   * Adds the given element to the IMAccountsRecPartExclusions array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMAccountsRecPartExclusions(entity.IMAccountsRecPartExcl element);
  
  
  /**
   * Adds the given element to the IMAccountsReceivables array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMAccountsReceivables(entity.IMAccountsReceivable element);
  
  
  /**
   * Adds the given element to the IMExcludedAccounts array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToIMExcludedAccounts(entity.IMExcludedAccount element);
  
  
  /**
   * Gets the value of the ARAutoNumberSeq field.
   * Sequence to autonumber IMAccountReceivables
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getARAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getARAutoNumberSeqID();
  
  
  /**
   * Gets the value of the BusinessClass field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BusinessClass getBusinessClass();
  
  
  /**
   * Gets the value of the Coinsurance field.
   * Coinsurance percentage values
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Coinsurance getCoinsurance();
  
  
  /**
   * Gets the value of the Description field.
   * Description of Accounts Receivable.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the IMAccountsRecPartConditions field.
   * Line-level conditions for Accounts Receivable Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPartCond[] getIMAccountsRecPartConditions();
  
  
  /**
   * Gets the value of the IMAccountsRecPartCosts field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPartCost[] getIMAccountsRecPartCosts();
  
  
  /**
   * Gets the value of the IMAccountsRecPartCovs field.
   * Line-level coverages for Accounts Receivable Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPartCov[] getIMAccountsRecPartCovs();
  
  
  /**
   * Gets the value of the IMAccountsRecPartExclusions field.
   * Line-level exclusions for Accounts Receivable Coverage Part of Inland Marine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsRecPartExcl[] getIMAccountsRecPartExclusions();
  
  
  /**
   * Gets the value of the IMAccountsReceivables field.
   * List of Accounts Receivable on this Coverage Part.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMAccountsReceivable[] getIMAccountsReceivables();
  
  
  /**
   * Gets the value of the IMExcludedAccounts field.
   * List of Excluded Accounts on this Coverage Part.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.IMExcludedAccount[] getIMExcludedAccounts();
  
  
  /**
   * Gets the value of the Reporting field.
   * Reporting
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReporting();
  
  
  /**
   * Removes the given element from the IMAccountsRecPartConditions array. This is achieved by marking the element for removal.
   */
  public void removeFromIMAccountsRecPartConditions(entity.IMAccountsRecPartCond element);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartConditions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMAccountsRecPartConditions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartCosts array. This is achieved by marking the element for removal.
   */
  public void removeFromIMAccountsRecPartCosts(entity.IMAccountsRecPartCost element);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartCosts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMAccountsRecPartCosts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartCovs array. This is achieved by marking the element for removal.
   */
  public void removeFromIMAccountsRecPartCovs(entity.IMAccountsRecPartCov element);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartCovs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMAccountsRecPartCovs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartExclusions array. This is achieved by marking the element for removal.
   */
  public void removeFromIMAccountsRecPartExclusions(entity.IMAccountsRecPartExcl element);
  
  
  /**
   * Removes the given element from the IMAccountsRecPartExclusions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMAccountsRecPartExclusions(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMAccountsReceivables array. This is achieved by marking the element for removal.
   */
  public void removeFromIMAccountsReceivables(entity.IMAccountsReceivable element);
  
  
  /**
   * Removes the given element from the IMAccountsReceivables array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMAccountsReceivables(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the IMExcludedAccounts array. This is achieved by marking the element for removal.
   */
  public void removeFromIMExcludedAccounts(entity.IMExcludedAccount element);
  
  
  /**
   * Removes the given element from the IMExcludedAccounts array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromIMExcludedAccounts(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ARAutoNumberSeq field.
   */
  public void setARAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setARAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BusinessClass field.
   */
  public void setBusinessClass(typekey.BusinessClass value);
  
  
  /**
   * Sets the value of the Coinsurance field.
   */
  public void setCoinsurance(typekey.Coinsurance value);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the IMAccountsRecPartConditions field.
   */
  public void setIMAccountsRecPartConditions(entity.IMAccountsRecPartCond[] value);
  
  
  /**
   * Sets the value of the IMAccountsRecPartCosts field.
   */
  public void setIMAccountsRecPartCosts(entity.IMAccountsRecPartCost[] value);
  
  
  /**
   * Sets the value of the IMAccountsRecPartCovs field.
   */
  public void setIMAccountsRecPartCovs(entity.IMAccountsRecPartCov[] value);
  
  
  /**
   * Sets the value of the IMAccountsRecPartExclusions field.
   */
  public void setIMAccountsRecPartExclusions(entity.IMAccountsRecPartExcl[] value);
  
  
  /**
   * Sets the value of the IMAccountsReceivables field.
   */
  public void setIMAccountsReceivables(entity.IMAccountsReceivable[] value);
  
  
  /**
   * Sets the value of the IMExcludedAccounts field.
   */
  public void setIMExcludedAccounts(entity.IMExcludedAccount[] value);
  
  
  /**
   * Sets the value of the Reporting field.
   */
  public void setReporting(java.lang.Boolean value);
  
  
  
}