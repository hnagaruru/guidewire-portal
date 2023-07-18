package entity;

/**
 * ScheduleAutoNumberSequence
 * A delegate for entities that are auto numbered.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ScheduleAutoNumberSequence.eti;ScheduleAutoNumberSequence.eix;ScheduleAutoNumberSequence.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface ScheduleAutoNumberSequence extends gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.ScheduleAutoNumberSequence> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.ScheduleAutoNumberSequence>("entity.ScheduleAutoNumberSequence");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> SCHEDULEAUTONUMBERSEQ_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("ScheduleAutoNumberSeq", "ScheduleAutoNumberSeq");
  
  /**
   * Gets the value of the ScheduleAutoNumberSeq field.
   * Sequence to autonumber schedule items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getScheduleAutoNumberSeq();
  
  
  /**
   * Sets the value of the ScheduleAutoNumberSeq field.
   */
  public void setScheduleAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  
}