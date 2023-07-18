package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocationAnswer.eti;BOPLocationAnswer.eix;BOPLocationAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPLocationAnswerVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPLocationAnswer AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPLocationAnswer> getAllVersions();
  
  
  
}