package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationAnswer.eti;BOPLocationAnswer.eix;BOPLocationAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPLocationAnswerVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPLocationAnswerVersionList {
  public BOPLocationAnswerVersionListImpl(entity.BOPLocationAnswer base)  {
    super(base);
  }
  
  public BOPLocationAnswerVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPLocationAnswer AsOf(java.util.Date date) {
    return (entity.BOPLocationAnswer)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocationAnswer> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}