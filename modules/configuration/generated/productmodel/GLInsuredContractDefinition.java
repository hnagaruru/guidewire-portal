package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLInsuredContractDefinition.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLInsuredContractDefinition extends entity.GeneralLiabilityCond {
  protected GLInsuredContractDefinition()  {
    super((java.lang.Void)null);
  }
  
  public GLInsuredContractDefinition(entity.PolicyPeriod branch)  {
    super(branch, "GLInsuredContractDefinition");
  }
  
  public GLInsuredContractDefinition(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLInsuredContractDefinition");
  }
  
  static {
    com.guidewire._generated.productmodel.GLInsuredContractDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLInsuredContractDefinition>() {
      public productmodel.GLInsuredContractDefinition newEmptyInstance() {
        return new productmodel.GLInsuredContractDefinition();
      }
      
      
    });
  }
}