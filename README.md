
# TaxAngular12
ทำการติดตั้ง npm install -g @angular/cli@12
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Bootstrap

npm install bootstrap@5

## ngx-Bootstrap

npm install ngx-bootstrap@7

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

# วิธีการใช้งาน

	1.ผู้ใช้ทำการเลือก Type of filing โดยมีให้เลือก 2 ประเภท คือ Ordinary  Filing , Additional Filing	
		1.1.ผู้ใช้ทำการเลือก Ordinary Filing จะมีให้กรอกข้อมูลในหัวข้อ Tax Computation โดยมีค่าที่จะต้องใส่ คือ 
			1.1.1.Total value of taxable electronic service exclusive of VAT 
		1.2.ผู้ใช้ทำการเลือก Additional Filing จะมีให้กรอกข้อมูลในหัวข้อ in case late fitting and payment, or addittional fitting เพิ่มเข้ามา คือ
			1.2.1.Surchaege
			1.2.2.Penalty
			1.2.3.Total amount of VAT, Surchaege, and Penalty to be remitted (2.+3.+4.)
	2.ผู้ใช้ทำการเลือก Ordinary Filing เมื่อกด Next ค่าที่กรอกจะแสดงในหน้า review-confirm
		2.1.โดยแสดงค่าของ Ordinary Filing ,Vat Month&year , Total VAT to be remitted ,Total Amount Payable 
	3.ผู้ใช้ทำการเลือก Additional Filing	มื่อกด Next ค่าที่กรอกจะแสดงในหน้า review-confirm
		3.1 โดยแสดงค่าของ Additional Filing ,Vat Month&year , Total VAT to be remitted ,Total Amount Payable
