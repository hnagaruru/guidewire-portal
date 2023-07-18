package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WorksheetData.eti;WorksheetData.eix;WorksheetData.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface WorksheetDataInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal {
  /**
   * Gets the value of the Data field.
   * Contents of the rating worksheet stored as GZIP-compressed XML.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.lang.Blob getData();
  
  
  /**
   * Gets the value of the LockingColumn field.
   * Meaningless column for locking
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getLockingColumn();
  
  
  /**
   * Gets the value of the WorksheetContainer field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorksheetContainer getWorksheetContainer();
  
  
  public gw.pl.persistence.core.Key getWorksheetContainerID();
  
  
  /**
   * Sets the value of the Data field.
   */
  public void setData(gw.lang.Blob value);
  
  
  /**
   * Sets the value of the LockingColumn field.
   */
  public void setLockingColumn(java.lang.Integer value);
  
  
  /**
   * Sets the value of the WorksheetContainer field.
   */
  public void setWorksheetContainer(entity.WorksheetContainer value);
  
  
  public void setWorksheetContainerID(gw.pl.persistence.core.Key value);
  
  
  
}