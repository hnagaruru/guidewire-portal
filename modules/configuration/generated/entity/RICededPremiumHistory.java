package entity;

/**
 * RICededPremiumHistory
 * 
 *     An entity describing the reason that a recalculation of premium ceding was done.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremiumHistory.eti;RICededPremiumHistory.eix;RICededPremiumHistory.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RICededPremiumHistory extends entity.Extractable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RICededPremiumHistory> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RICededPremiumHistory>("entity.RICededPremiumHistory");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMENTTEXT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CommentText", "CommentText");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEOFRECALCULATION_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateOfRecalculation", "DateOfRecalculation");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REASON_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Reason", "Reason");
  
  /**
   * Gets the value of the CommentText field.
   * Optional comment describing the reason for the recalculation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCommentText();
  
  
  /**
   * Gets the value of the DateOfRecalculation field.
   * The date on which the recalculation was done.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateOfRecalculation();
  
  
  /**
   * Gets the value of the Reason field.
   * One of a list of defined reasons for performing recalculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RIRecalcReason getReason();
  
  
  /**
   * Sets the value of the CommentText field.
   */
  public void setCommentText(java.lang.String value);
  
  
  /**
   * Sets the value of the DateOfRecalculation field.
   */
  public void setDateOfRecalculation(java.util.Date value);
  
  
  /**
   * Sets the value of the Reason field.
   */
  public void setReason(typekey.RIRecalcReason value);
  
  
  
}