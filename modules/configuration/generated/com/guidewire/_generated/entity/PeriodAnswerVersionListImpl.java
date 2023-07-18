package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PeriodAnswer.eti;PeriodAnswer.eix;PeriodAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class PeriodAnswerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.PeriodAnswerVersionList {
  public PeriodAnswerVersionListImpl(entity.PeriodAnswer base)  {
    super(base);
  }
  
  public PeriodAnswerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.PeriodAnswer AsOf(java.util.Date date) {
    return (entity.PeriodAnswer)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.PeriodAnswer> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}