package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyLineAnswer.eti;PolicyLineAnswer.eix;PolicyLineAnswer.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PolicyLineAnswerVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PolicyLineAnswer AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PolicyLineAnswer> getAllVersions();
  
  
  
}