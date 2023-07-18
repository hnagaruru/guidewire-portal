package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ScheduleAutoNumberSequence.eti;ScheduleAutoNumberSequence.eix;ScheduleAutoNumberSequence.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ScheduleAutoNumberSequenceInternal extends com.guidewire.pl.domain.persistence.core.impl.BeanInternal {
  /**
   * Gets the value of the ScheduleAutoNumberSeq field.
   * Sequence to autonumber schedule items
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AutoNumberSequence getScheduleAutoNumberSeq();
  
  
  public gw.pl.persistence.core.Key getScheduleAutoNumberSeqID();
  
  
  /**
   * Sets the value of the ScheduleAutoNumberSeq field.
   */
  public void setScheduleAutoNumberSeq(entity.AutoNumberSequence value);
  
  
  public void setScheduleAutoNumberSeqID(gw.pl.persistence.core.Key value);
  
  
  
}