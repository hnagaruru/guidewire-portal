package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingSide.eti;BuildingSide.eix;BuildingSide.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BuildingSideVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BuildingSide AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BuildingSide> getAllVersions();
  
  
  
}