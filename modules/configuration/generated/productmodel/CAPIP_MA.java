package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_MA extends entity.BAStateCov {
  protected CAPIP_MA()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_MA(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_MA");
  }
  
  public CAPIP_MA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_MA");
  }
  
  public boolean getHasPIPMA_AIRBAGTerm() {
    return hasCovTerm("PIPMA_AIRBAG");
  }
  
  public boolean getHasPIPMA_DEDUCTIBLETerm() {
    return hasCovTerm("PIPMA_DEDUCTIBLE");
  }
  
  public boolean getHasPIPMA_PIPTerm() {
    return hasCovTerm("PIPMA_PIP");
  }
  
  public boolean getHasPIPMA_WCTerm() {
    return hasCovTerm("PIPMA_WC");
  }
  
  public productmodel.GenericPIPMA_AIRBAGType getPIPMA_AIRBAGTerm() {
    return (productmodel.GenericPIPMA_AIRBAGType)getCovTerm("PIPMA_AIRBAG");
  }
  
  public productmodel.OptionPIPMA_DEDUCTIBLEType getPIPMA_DEDUCTIBLETerm() {
    return (productmodel.OptionPIPMA_DEDUCTIBLEType)getCovTerm("PIPMA_DEDUCTIBLE");
  }
  
  public productmodel.OptionPIPMA_PIPType getPIPMA_PIPTerm() {
    return (productmodel.OptionPIPMA_PIPType)getCovTerm("PIPMA_PIP");
  }
  
  public productmodel.GenericPIPMA_WCType getPIPMA_WCTerm() {
    return (productmodel.GenericPIPMA_WCType)getCovTerm("PIPMA_WC");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_MAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_MA>() {
      public productmodel.CAPIP_MA newEmptyInstance() {
        return new productmodel.CAPIP_MA();
      }
      
      
    });
  }
}