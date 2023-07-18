package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPOutSignCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPOutSignCov extends entity.BOPLocationCov {
  protected BOPOutSignCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPOutSignCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPOutSignCov");
  }
  
  public BOPOutSignCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPOutSignCov");
  }
  
  public productmodel.DirectBOPOutdoorSignLimType getBOPOutdoorSignLimTerm() {
    return (productmodel.DirectBOPOutdoorSignLimType)getCovTerm("BOPOutdoorSignLim");
  }
  
  public boolean getHasBOPOutdoorSignLimTerm() {
    return hasCovTerm("BOPOutdoorSignLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPOutSignCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPOutSignCov>() {
      public productmodel.BOPOutSignCov newEmptyInstance() {
        return new productmodel.BOPOutSignCov();
      }
      
      
    });
  }
}