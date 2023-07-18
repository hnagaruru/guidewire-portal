package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorksheetContainer.eti;WorksheetContainer.eix;WorksheetContainer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WorksheetContainerInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.RootInfoInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.rating.WorksheetContainerPublicMethods, com.guidewire.pl.domain.extract.impl.RootInfoInternalMethods, com.guidewire.pl.system.bundle.InsertCallback, com.guidewire.pl.system.bundle.UpdateCallback {
  /**
   * Adds the given element to the WorksheetDataArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToWorksheetDataArray(entity.WorksheetData element);
  
  
  /**
   * Gets the value of the Branch field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranch();
  
  
  public gw.pl.persistence.core.Key getBranchID();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the PolicyTerm field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the WorksheetData field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetData getWorksheetData();
  
  
  /**
   * Gets the value of the WorksheetDataArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetData[] getWorksheetDataArray();
  
  
  public gw.pl.persistence.core.Key getWorksheetDataID();
  
  
  /**
   * Gets the value of the CanPurge field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isCanPurge();
  
  
  /**
   * Gets the value of the UpdateRequired field.
   * Dirty bit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isUpdateRequired();
  
  
  /**
   * Removes the given element from the WorksheetDataArray array. This is achieved by marking the element for removal.
   */
  public void removeFromWorksheetDataArray(entity.WorksheetData element);
  
  
  /**
   * Removes the given element from the WorksheetDataArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromWorksheetDataArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Branch field.
   */
  public void setBranch(entity.PolicyPeriod value);
  
  
  public void setBranchID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the CanPurge field.
   */
  public void setCanPurge(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the UpdateRequired field.
   */
  public void setUpdateRequired(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the WorksheetData field.
   */
  public void setWorksheetData(entity.WorksheetData value);
  
  
  /**
   * Sets the value of the WorksheetDataArray field.
   */
  public void setWorksheetDataArray(entity.WorksheetData[] value);
  
  
  public void setWorksheetDataID(gw.pl.persistence.core.Key value);
  
  
  
}