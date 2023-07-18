package entity;

/**
 * Referenceable
 * 
 *     Delegate that can be implemented by any entity that wants to track references.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Referenceable.eti;Referenceable.eix;Referenceable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Referenceable extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Referenceable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Referenceable>("entity.Referenceable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REFERENCED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Referenced", "Referenced");
  
  /**
   * Gets the value of the Referenced field.
   * Whether or not this entity is Referenced.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReferenced();
  
  
  /**
   * Merges the reference tracking for another Referenceable into this Referenceable.  If the Referenced bit
   * is set for the merged bean, the bit is set for the this Referenceable; then the Referenced bit is disabled for
   * the merged bean (so it can be removed/retired as part of the merge)
   * @param mergedReference the Referenceable being merged into this one
   */
  public void mergeReferenceWith(entity.Referenceable mergedReference);
  
  
  /**
   * Records that this Referenceable is now referenced by a relatively permanent Foreign Key, and that that
   * reference is permanent enough that this entity should probably not be removed/retired.
   */
  public void recordReference();
  
  
  
}