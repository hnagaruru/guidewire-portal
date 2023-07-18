package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAPollutLiabBoardCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAPollutLiabBoardCov extends entity.BAStateCov {
  protected BAPollutLiabBoardCov()  {
    super((java.lang.Void)null);
  }
  
  public BAPollutLiabBoardCov(entity.PolicyPeriod branch)  {
    super(branch, "BAPollutLiabBoardCov");
  }
  
  public BAPollutLiabBoardCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAPollutLiabBoardCov");
  }
  
  static {
    com.guidewire._generated.productmodel.BAPollutLiabBoardCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAPollutLiabBoardCov>() {
      public productmodel.BAPollutLiabBoardCov newEmptyInstance() {
        return new productmodel.BAPollutLiabBoardCov();
      }
      
      
    });
  }
}