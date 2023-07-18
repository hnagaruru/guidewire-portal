package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPTransaction.eti;HOPTransaction.eix;HOPTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPTransactionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.HOPTransaction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> getAllVersions();
  
  
  
}