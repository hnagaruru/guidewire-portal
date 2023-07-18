package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingSide.eti;BuildingSide.eix;BuildingSide.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BuildingSideVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BuildingSideVersionList {
  public BuildingSideVersionListImpl(entity.BuildingSide base)  {
    super(base);
  }
  
  public BuildingSideVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BuildingSide AsOf(java.util.Date date) {
    return (entity.BuildingSide)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BuildingSide> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}