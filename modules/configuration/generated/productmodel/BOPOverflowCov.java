package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOverflowCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPOverflowCov extends entity.BOPLocationCov {
  protected BOPOverflowCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPOverflowCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPOverflowCov");
  }
  
  public BOPOverflowCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPOverflowCov");
  }
  
  public productmodel.DirectBOPOverflowLimType getBOPOverflowLimTerm() {
    return (productmodel.DirectBOPOverflowLimType)getCovTerm("BOPOverflowLim");
  }
  
  public boolean getHasBOPOverflowLimTerm() {
    return hasCovTerm("BOPOverflowLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPOverflowCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPOverflowCov>() {
      public productmodel.BOPOverflowCov newEmptyInstance() {
        return new productmodel.BOPOverflowCov();
      }
      
      
    });
  }
}