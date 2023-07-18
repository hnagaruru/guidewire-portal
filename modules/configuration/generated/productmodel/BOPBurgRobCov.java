package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPBurgRobCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPBurgRobCov extends entity.BOPLocationCov {
  protected BOPBurgRobCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPBurgRobCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPBurgRobCov");
  }
  
  public BOPBurgRobCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPBurgRobCov");
  }
  
  public productmodel.DirectBOPBurgRobLimType getBOPBurgRobLimTerm() {
    return (productmodel.DirectBOPBurgRobLimType)getCovTerm("BOPBurgRobLim");
  }
  
  public boolean getHasBOPBurgRobLimTerm() {
    return hasCovTerm("BOPBurgRobLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPBurgRobCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPBurgRobCov>() {
      public productmodel.BOPBurgRobCov newEmptyInstance() {
        return new productmodel.BOPBurgRobCov();
      }
      
      
    });
  }
}