package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLTransaction.eti;GLTransaction.eix;GLTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> getAllVersions();
  
  
  
}