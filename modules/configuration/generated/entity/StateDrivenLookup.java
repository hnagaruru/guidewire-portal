package entity;

/**
 * StateDrivenLookup
 * Delegate for availability lookup entities where State is an optional restriction.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "StateDrivenLookup.eti;StateDrivenLookup.eix;StateDrivenLookup.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface StateDrivenLookup extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.StateDrivenLookup> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.StateDrivenLookup>("entity.StateDrivenLookup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("State", "State");
  
  /**
   * Gets the value of the State field.
   * The state for which this lookup applies, or null if the lookup is not restricted by state
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Jurisdiction getState();
  
  
  /**
   * Sets the value of the State field.
   */
  public void setState(typekey.Jurisdiction value);
  
  
  
}