package entity;

/**
 * PendingUpdateDelegate
 * A entity storing a pending change to an account level entity.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PendingUpdateDelegate.eti;PendingUpdateDelegate.eix;PendingUpdateDelegate.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface PendingUpdateDelegate extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PendingUpdateDelegate> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PendingUpdateDelegate>("entity.PendingUpdateDelegate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("Job", "Job");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PENDINGUPDATETIME_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("PendingUpdateTime", "PendingUpdateTime");
  
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob();
  
  
  /**
   * Gets the value of the PendingUpdateTime field.
   * The time when this pending update should be applied to the target entity.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPendingUpdateTime();
  
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value);
  
  
  /**
   * Sets the value of the PendingUpdateTime field.
   */
  public void setPendingUpdateTime(java.util.Date value);
  
  
  
}