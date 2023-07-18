package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFuneralDirCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPFuneralDirCov extends entity.BusinessOwnersCov {
  protected BOPFuneralDirCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPFuneralDirCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPFuneralDirCov");
  }
  
  public BOPFuneralDirCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPFuneralDirCov");
  }
  
  public productmodel.DirectBOPFuneralDirNumType getBOPFuneralDirNumTerm() {
    return (productmodel.DirectBOPFuneralDirNumType)getCovTerm("BOPFuneralDirNum");
  }
  
  public boolean getHasBOPFuneralDirNumTerm() {
    return hasCovTerm("BOPFuneralDirNum");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPFuneralDirCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPFuneralDirCov>() {
      public productmodel.BOPFuneralDirCov newEmptyInstance() {
        return new productmodel.BOPFuneralDirCov();
      }
      
      
    });
  }
}