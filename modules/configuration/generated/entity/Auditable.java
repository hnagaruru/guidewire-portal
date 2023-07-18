package entity;

/**
 * Auditable
 * 
 *     Delegate that can be implemented for things that are auditable.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Auditable.eti;Auditable.eix;Auditable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Auditable extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Auditable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Auditable>("entity.Auditable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITEDAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("AuditedAmount", "AuditedAmount");
  
  /**
   * Gets the value of the AuditedAmount field.
   * The audited amount
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getAuditedAmount();
  
  
  /**
   * Sets the value of the AuditedAmount field.
   */
  public void setAuditedAmount(java.lang.Integer value);
  
  
  
}