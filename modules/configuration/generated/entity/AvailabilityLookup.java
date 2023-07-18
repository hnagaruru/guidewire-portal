package entity;

/**
 * AvailabilityLookup
 * Delegate defining the base, non-negotiable fields, all availability lookup entities must have.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AvailabilityLookup.eti;AvailabilityLookup.eix;AvailabilityLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface AvailabilityLookup extends entity.Lookup {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AvailabilityLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AvailabilityLookup>("entity.AvailabilityLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AVAILABILITY_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Availability", "Availability");
  
  /**
   * Gets the value of the Availability field.
   * Specifies whether this lookup is an inclusion or exclusion for the entity whose availability is being computed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AvailabilityType getAvailability();
  
  
  /**
   * Sets the value of the Availability field.
   */
  public void setAvailability(typekey.AvailabilityType value);
  
  
  
}