package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPVetCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPVetCov extends entity.BusinessOwnersCov {
  protected BOPVetCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPVetCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPVetCov");
  }
  
  public BOPVetCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPVetCov");
  }
  
  public productmodel.DirectBOPVetNumType getBOPVetNumTerm() {
    return (productmodel.DirectBOPVetNumType)getCovTerm("BOPVetNum");
  }
  
  public boolean getHasBOPVetNumTerm() {
    return hasCovTerm("BOPVetNum");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPVetCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPVetCov>() {
      public productmodel.BOPVetCov newEmptyInstance() {
        return new productmodel.BOPVetCov();
      }
      
      
    });
  }
}