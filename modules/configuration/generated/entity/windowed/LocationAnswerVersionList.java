package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LocationAnswer.eti;LocationAnswer.eix;LocationAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface LocationAnswerVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.LocationAnswer AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.LocationAnswer> getAllVersions();
  
  
  
}